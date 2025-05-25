import HtmlEditor, {
    Toolbar,
    Item,
} from 'devextreme-react/html-editor';
import { useCallback, useState, InputHTMLAttributes } from 'react'; 
 
export default function HtmlInput({ name = '', value = '', onChange } : InputHTMLAttributes<HTMLInputElement>) {

    const [valueContent, setValueContent] = useState(value);

    const valueChanged = useCallback((e:any) => {
        setValueContent(e.value); 
    }, [onChange]);

 
    return (
        <div className="widget-container">
            <HtmlEditor
                height={300}
                defaultValue={valueContent}
                valueType={'html'}
                onValueChanged={valueChanged}
                name={name}
            >
                <Toolbar>
                    <Item name="undo" />
                    <Item name="redo" />
                    <Item name="separator" />
                    <Item name="bold" />
                    <Item name="italic" />
                    <Item name="strike" />
                    <Item name="underline" />
                    <Item name="separator" />
                    <Item name="alignLeft" />
                    <Item name="alignCenter" />
                    <Item name="alignRight" />
                    <Item name="alignJustify" />
                    <Item name="separator" />
                    <Item name="color" />
                    <Item name="background" />
                </Toolbar>
            </HtmlEditor>
        </div>
    );
}
