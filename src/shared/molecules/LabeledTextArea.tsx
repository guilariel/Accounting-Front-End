import { Textarea } from "../atoms/Textarea";
import { Label } from "../atoms/Label";

interface LabeledTextAreaProps{
    text: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    rows: number
}

export function LabeledTextArea({text, placeholder, value, onChange, rows}: LabeledTextAreaProps) {
    return (
        <div>
            <Label text={text} />
            <Textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows}
            />
        </div>
    );
}