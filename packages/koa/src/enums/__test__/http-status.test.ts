import { HttpStatus } from 'src/enums/http-status'

describe('# HttpStatus', () => {
  describe('call is2xxSuccess', () => {
    it('should return true when pass "Ok", "Created"', () => {
      expect(HttpStatus.is2xxSuccess(HttpStatus.Ok)).toBe(true)
      expect(HttpStatus.is2xxSuccess(HttpStatus.Created)).toBe(true)
    })

    it('should return false when pass "MovedPermanently", "NotFound", "Continue"', () => {
      expect(HttpStatus.is2xxSuccess(HttpStatus.MovedPermanently)).toBe(false)
      expect(HttpStatus.is2xxSuccess(HttpStatus.NotFound)).toBe(false)
      expect(HttpStatus.is2xxSuccess(HttpStatus.Continue)).toBe(false)
    })
  })

  describe('call is4xxError', () => {
    it('should return true when pass "BadRequest", "NotFound", "Forbidden"', () => {
      expect(HttpStatus.is4xxError(HttpStatus.BadRequest)).toBe(true)
      expect(HttpStatus.is4xxError(HttpStatus.NotFound)).toBe(true)
      expect(HttpStatus.is4xxError(HttpStatus.Forbidden)).toBe(true)
    })

    it('should return false when pass "MovedPermanently", "InternalServerError", "Continue"', () => {
      expect(HttpStatus.is4xxError(HttpStatus.MovedPermanently)).toBe(false)
      expect(HttpStatus.is4xxError(HttpStatus.InternalServerError)).toBe(false)
      expect(HttpStatus.is4xxError(HttpStatus.Continue)).toBe(false)
    })
  })

  describe('call is5xxError', () => {
    it('should return true when pass "InternalServerError", "BadGateway"', () => {
      expect(HttpStatus.is5xxError(HttpStatus.InternalServerError)).toBe(true)
      expect(HttpStatus.is5xxError(HttpStatus.BadGateway)).toBe(true)
    })

    it('should return false when pass "MovedPermanently", "NotFound", "Continue"', () => {
      expect(HttpStatus.is5xxError(HttpStatus.MovedPermanently)).toBe(false)
      expect(HttpStatus.is5xxError(HttpStatus.NotFound)).toBe(false)
      expect(HttpStatus.is5xxError(HttpStatus.Continue)).toBe(false)
    })
  })
})
