import React, { useState, useRef, useEffect } from 'react';
import { HiChevronDown, HiCheck } from 'react-icons/hi2';

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  width?: string;
}

export const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = 'Select option',
  className = '',
  width = '150px'
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="relative" ref={selectRef} style={{ width }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-3 py-2 text-left bg-white border rounded-lg shadow-sm
          flex items-center justify-between
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          hover:bg-gray-50 transition-colors duration-200
          ${isOpen ? 'border-primary ring-2 ring-primary ring-opacity-50' : 'border-gray-300'}
          ${className}
        `}
      >
        <div className="flex items-center gap-2">
          {selectedOption?.icon}
          <span className="block truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <HiChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 
            ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          <ul className="py-1 max-h-60 overflow-auto">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  className={`
                    w-full px-3 py-2 text-left flex items-center justify-between
                    hover:bg-gray-50 transition-colors duration-150
                    ${value === option.value ? 'bg-gray-50' : ''}
                  `}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    {option.icon}
                    <span className="block truncate">{option.label}</span>
                  </div>
                  {value === option.value && (
                    <HiCheck className="w-5 h-5 text-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}; 