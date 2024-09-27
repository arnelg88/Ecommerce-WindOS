import './BtnFilter.css';

export const BtnFilter = ({ IconComponent, label, onClick }) => (
  <button className="button-name" role="button">
    {IconComponent && <span className="iconEncabezados">{IconComponent}</span>}
    {label}
  </button>
);
