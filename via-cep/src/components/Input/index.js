import { InputText } from "./style"

export const Input = ({
    placeholder,
    editable,
    fielValue,
    onChangeText,
    keyboardType,
    maxLength
}) => {
    return (
        // componente estilizado
        <InputText
            placeholder={placeholder}
            editable={editable}
            value={fielValue}
            keyboardType={keyboardType}
            maxLength={maxLength}
            onChangeText={onChangeText}
        />
    )
}