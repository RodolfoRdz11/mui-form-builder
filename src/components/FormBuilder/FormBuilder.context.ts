import { createContext, useContext } from "react";

interface FormBuilderContextType {
    currentValues: any,
    errors: any,
    touched: any
}

export const FormBuilderContext = createContext<FormBuilderContextType>({} as FormBuilderContextType);
export const useFormBuilderContext = () => useContext(FormBuilderContext);