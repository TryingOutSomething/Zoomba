import { requiredField, validEmail } from '@/utils/validation'

export const inputValidators = {
  data () {
    return {
      validation: {
        required: requiredField,
        email: validEmail
      }
    }
  }
}
