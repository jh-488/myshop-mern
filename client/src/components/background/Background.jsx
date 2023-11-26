import "./Background.css"

const Background = ({display, toggle}) => {
  return display && <div className="background" onClick={toggle}></div>
}

export default Background
