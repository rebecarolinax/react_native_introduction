import { FieldContent } from "./style"
import { Label } from "../Label"
import { Input } from "../Input"

export const ContainerInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    value = null,
    onChangeText = null,
    keyboardType = 'default',
    maxLength = 9
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel} />

            <Input
                editable={editable}
                placeholder={placeholder}
                keyboardType={keyboardType}
                maxLength={maxLength}
                value={value}
                onChangeText={onChangeText}
            />
        </FieldContent>
    )
}

