import SocialNetworks from './SocialNetworks';

import Avatar from '../img/leandro.jpeg'

import '../styles/components/sidebar.sass'
import { InformationContainer } from './InformationContainer';


export const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Leandro Veloso" />
        <p className="title">Cargo</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="" className="btn">
          download curriculo
        </a>
    </aside>
  )
}

export default Sidebar;
