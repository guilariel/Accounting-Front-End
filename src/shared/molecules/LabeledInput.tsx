import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

interface LabeledInputProps{
    text: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export function LabeledInput({text, placeholder, value, onChange}: LabeledInputProps) {
    return (
        <div>
            <Label text={text} />
            <Input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}