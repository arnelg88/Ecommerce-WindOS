import './Encabezados.css'
import { BtnFilter } from '../BtnFilter/BtnFilter';
import IcBaselineComputer from '../../Icons/IconComputer';
import IcBaselinePhoneIphone from '../../Icons/IconPhone';
import IcBaselineHouse from '../../Icons/IconHouse';
import IcOutlineFavorite from '../../Icons/IconHeart';

export const Encabezados = () => (
<div className="section-divider  spacefix">
  <BtnFilter className=""
        IconComponent={<IcBaselineComputer />}
        label="Computadoras"
      />
  <BtnFilter  
  IconComponent={<IcBaselinePhoneIphone />}
  label="Celulares" />

  <BtnFilter  
  IconComponent={<IcBaselinePhoneIphone />}
  label="Electrodomesticos" />

    <BtnFilter  
  IconComponent={<IcBaselineHouse />}
  label="Muebles" />

  <BtnFilter  
  IconComponent={<IcOutlineFavorite />}
  label="Salud y Belleza" />
    <BtnFilter  
  IconComponent={<IcBaselinePhoneIphone />}
  label="Celulares" />

</div>
)