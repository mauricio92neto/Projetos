const chai = require('chai');
const { expect } = require("chai");
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { mockProducts, returnService } = require('../mocks/productMock.test');
const productService = require('../../../src/services/productService');

const {  byId } = require('../../../src/controllers/productControl');

chai.use(sinonChai);

describe('Controller products', function () {
  describe('Verificar erro', function () {
    it('retorna erro pelo id inexistente', async function () {
      const res = {};
      const req = { params: { id: 12 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const mockService = { message: 'Product not found', status: 404 };

      sinon.stub(productService, 'servId').resolves(mockService);

      await byId(req, res);
      console.log(res.status);

      expect(res.status).to.have.been.calledOnceWith(404);
      expect(res.json).to.have.been.calledOnceWith({ message: 'Product not found' });
    });
    
    
  });
  afterEach(sinon.restore)
});