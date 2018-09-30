import { mount } from 'avoriaz'
import MoneyButton from 'components/MoneyButton.vue'

describe('MoneyButton', () => {
  const subject = mount(MoneyButton, {
    propsData: {
      to:     74,
      amount: 0.99,
      label:  'Tip test'
    }
  })

  describe('data defaults', () => {
    const data = subject.data()

    it('must nave no hint object', () => {
      expect( data.hint ).toBe(null)
    })

    it('must have default size', () => {
      const { width, height } = data.size
      expect( width ).toBe('280px')
      expect( height ).toBe('50px')
    })
  })

  describe('iframeSrc', () => {
    const url = subject.vm.iframeSrc

    it('must have correct base url', () => {
      expect( url ).toMatch(/^https:\/\/www.moneybutton.com\/iframe\/v2/)
    })

    it('must contain correct query params', () => {
      expect( url ).toMatch(/to=74/)
      expect( url ).toMatch(/amt=0.99/)
      expect( url ).toMatch(/ccy=USD/)
      expect( url ).toMatch(/lbl=Tip%20test/)
    })

    it('must update reactively', () => {
      subject.setProps({
        amount: '5.50',
        label: 'Buy test'
      })
      expect( subject.vm.iframeSrc ).toMatch(/amt=5.50/)
      expect( subject.vm.iframeSrc ).toMatch(/lbl=Buy%20test/)
    })
  })

  describe('iframe element', () => {
    const iframe = subject.find('iframe')[0].element

    it('must include passed data', () => {
      expect( iframe.src ).toEqual( subject.vm.iframeSrc )
    })
  })
})