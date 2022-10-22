const { expect } = require("chai");
const sinon = require("sinon");

const productModel = require('../../../src/models');
const { servId , allServ} = require('../../../src/services/productService');
const { mockProducts, invaled } = require('../mocks/productMock.test');

describe("Service products", function () {
  describe("Verifica os produtcs", function () {
    it("Verifica os produtos", async function () {
      sinon.stub(productModel, 'newModel').resolves(mockProducts);

      const result = await allServ();
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(mockProducts);
    });

    it('Mostra o item pelo id', async function () {
      sinon.stub(productModel, 'newId').resolves(mockProducts[0]);

      const result = await productModel.newId(1);

      expect(result).to.deep.equal(mockProducts[0]);
    });

    it("Erro se não existir id", async function () {
      sinon.stub(productModel, 'newId').resolves(undefined);

      const result = await servId(invaled);

      expect(result.message).to.equal('Product not found');
    });
    afterEach(sinon.restore);
  });
});