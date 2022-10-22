const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');

const productModel = require('../../../src/models/productModel');
const connection = require('../../../src/models/db/connection');
const { mockProducts } = require('../mocks/productMock.test');

describe('Model products', function () {
  describe('Verifica se lista todos os produtos', function () {
    it(' verifica e retorna um array com os elementos', async function () {
      sinon.stub(connection, 'execute').resolves([mockProducts]);
      const result = await productModel.newModel();

      expect(result).to.deep.equal(mockProducts);
    });
    it('Verifica se retorna o item pelo id', async function () {
      sinon.stub(connection, 'execute').resolves([[mockProducts[0]]]);

      const result = await productModel.newId(1);

      expect(result).to.deep.equal(mockProducts[0]);
    });

    afterEach(() => sinon.restore());
  });
})