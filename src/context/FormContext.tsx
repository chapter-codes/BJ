// src/context/FormContext.tsx
import { createContext, useContext, useReducer, } from "react"

// Types for all fields
export type FormState = {
  // Service Summary
  serviceType: null | string

  // Business Information
  businessType: null | string
  businessDescription: null | string
  businessAddress: null | string
  state: null | string
  lga: null | string

  // Personal Information
  fullName: null | string
  phoneNumber: null | string
  email: null | string
  residentialAddress: null | string
  idType: null | string
  idNumber: null | string
}

type FormAction = {
  type: "UPDATE_FIELD"
  field: keyof FormState
  value: string
}

const initialState: FormState = {
  serviceType: null,
  businessType: null,
  businessDescription: null,
  businessAddress: null,
  state: null,
  lga: null,
  fullName: null,
  phoneNumber: null,
  email: null,
  residentialAddress: null,
  idType: null,
  idNumber: null,
}

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
   case "UPDATE_FIELD":
        return { 
            ...state, 
            [action.field]: action.value.trim() === "" ? null : action.value 
        }
    default:
      return state
  }
}

type FormContextType = {
  state: FormState
  dispatch: React.Dispatch<FormAction>
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialState)

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}
