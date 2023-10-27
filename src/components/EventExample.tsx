import * as React from 'react';


const EventExample: React.FunctionComponent = () => {
    const [value, setValue] = React.useState<string>('')
    const [isDrag, setIsDrag] = React.useState<boolean>(false)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }
    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log('drag')
    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
        console.log('drop')
    }
    const handleLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
        console.log('leave')
    }
    const handleOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleInput} placeholder='Управляемый'/>
            <input type="text" ref={inputRef} placeholder='Неуправляемый'/>
            <button onClick={handleBtn}>click</button>  
            
            <div onDrag={handleDrag} draggable
                style={{ width: '200px', height: '200px', background: 'cyan'}}>
            </div>
            <div onDrop={handleDrop} onDragLeave={handleLeave} onDragOver={handleOver}
                style={{ width: '200px', height: '200px', background: isDrag ? 'blue' : 'cyan', marginTop: '15px' }}>
            </div>
        </div>
    );
};

export default EventExample;
