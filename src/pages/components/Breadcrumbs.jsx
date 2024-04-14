import { Link, useLocation } from "react-router-dom"


const Breadcrumbs = () => {
  const {pathname} = useLocation();
  const pathnames= pathname.split('/').filter((x)=>x);
  let breadcrumb = "";
  return (
    <div className="breadcrumbs">
      {pathnames.length > 0 && <Link to={"/"}>Home </Link>}
      {
    pathnames.map((name, index) => {
        breadcrumb += `/${name}`;
        const isLast = index === pathnames.length - 1;
        const key = `breadcrumb-${name}-${index}`; // Generate a unique key
        return isLast ? (
            <span key={key}>/{name}</span>
        ) : (
            <span key={key}>/ <Link to={breadcrumb}>{name}</Link> </span>
        )
    })
}

    </div>
  )
}

export default Breadcrumbs
