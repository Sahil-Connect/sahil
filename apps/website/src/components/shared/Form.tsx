
interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
}

interface TextAreaProps {
  label: string;
  placeholder: string;
  required: boolean;
}

interface SelectProps {
  label: string;
}

export const Input = ({ label, placeholder, type, required }: InputProps) => {
  return (
    <div>
      <label htmlFor={label} className="label text-sm p-0 mb-2 font-medium">{label}</label>
      <input 
        type={type}
        placeholder={placeholder} 
        required={required}
        className="input input-bordered border border-gray-200 w-full text-sm outline-none focus:outline-none focus:border-gray-300" 
      />
    </div>
  );
};

export const TextArea = ({ label, placeholder, required }: TextAreaProps) => {
  return (
    <div>
      <label htmlFor={label} className="label text-sm p-0 mb-2 font-medium">{label}</label>
      <textarea 
        placeholder={placeholder} 
        required={required}
        className="textarea textarea-bordered h-28 resize-none border border-gray-200 w-full text-sm outline-none focus:outline-none focus:border-gray-300" 
      />
    </div>
  );
};

export const Select = ({ label }: SelectProps) => {
  return (
    <div>
      <label htmlFor={label} className="label text-sm p-0 mb-2 font-medium">{label}</label>
      <select className="select select-bordered border border-gray-200 w-full text-sm outline-none focus:outline-none focus:border-gray-300 required">
        <option disabled selected>Select</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
  );
};
