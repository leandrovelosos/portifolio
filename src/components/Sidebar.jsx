import Avatar from '../img/leandro.jpeg'

import '../styles/components/sidebar.sass'

export const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Leandro Veloso" />
        <p className="title">Cargo</p>
        <p>redes sociais</p>
        <p>informacoes de contato</p>
        <a href="" className="btn">
          download curriculo
        </a>
    </aside>
  )
}

export default Sidebar;
