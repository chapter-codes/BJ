import type { FormState } from "@/context/FormContext";

const step1Fields: (keyof FormState)[] = ['businessType'];
const step2Fields: (keyof FormState)[] = ['businessType', 'businessDescription', 'businessAddress', 'state', 'lga'];
const step3Fields: (keyof FormState)[] = ['businessType', ];

export function stepFieldsCompleted(step: number, data: FormState) {
  switch (step) {
    case 1:
      return step1Fields.every(field => !!data[field]);
    case 2:
      return step2Fields.every(field => !!data[field]);
    case 3:
      return step3Fields.every(field => !!data[field]);
    default:
      return false;
  }
}
