import reducer from '../../app/modules'

describe('root reducer', () => {
  it('should combine all reducers', () => {
    expect(reducer({}, { type: '@@INIT' })).toEqual({
      account: expect.any(Object),
      generateWallet: expect.any(Object),
      wallet: expect.any(Object),
      price: expect.any(Object),
      transactions: expect.any(Object),
      dashboard: expect.any(Object),
      metadata: expect.any(Object),
      notifications: expect.any(Object),
      claim: expect.any(Object),
      modal: expect.any(Object)
    })
  })
})
