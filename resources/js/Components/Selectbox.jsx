export default function Selectbox({ 
    className = '', 
    options, 
    currentValue, 
    ...proops 
}) {
    return  (
        <select 
            {...proops}
            defaultValue={currentValue}
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500' + 
                className
            }
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}