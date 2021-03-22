import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import * as api from '../services/api';
import mockedCategoriesResult from '../__mocks__/categories';
import mockedQueryResult from '../__mocks__/query';

jest.mock('../services/api');
api.getCategories.mockImplementation(
  () => Promise.resolve(mockedCategoriesResult),
);
api.getProductsFromCategoryAndQuery.mockImplementation(
  () => Promise.resolve(mockedQueryResult),
);

describe(`11 - Avalie e comente acerca de um produto em sua tela de exibição detalhada`, () => {
  it('Avalia um produto na sua tela de detalhes', async () => {
    const evaluationContent = `Esta é uma avaliação sobre o produto realizada na
                               tela de detalhe`;
    render(<App />);
    await waitFor(() => expect(api.getCategories).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(api.getProductsFromCategoryAndQuery).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('product-detail-link')[0]);
    await waitFor(
      () => expect(screen.getByTestId('product-detail-name')).toHaveTextContent(
        mockedQueryResult.results[0].title,
      ),
    );
    fireEvent.change(
      screen.getByTestId('product-detail-evaluation'),
      { target: { value: evaluationContent } },
    );
    expect(screen.getByTestId('product-detail-evaluation')).toHaveValue(
      evaluationContent,
    );
  });
});
