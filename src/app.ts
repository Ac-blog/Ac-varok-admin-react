/* eslint-disable @typescript-eslint/consistent-type-assertions */
export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault()
    },
  },
}
