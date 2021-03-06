/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-router-dom";

function Logo({
  children,
  to = "/",
  ...props
}: {
  children: React.ReactNode;
  to?: string;
}) {
  return (
    <Link
      {...props}
      to={to}
      sx={{
        textDecoration: "none",
        outline: "none",
        ":hover, :focus": {
          outline: t => `2px solid ${t.colors.text}`
        }
      }}
    >
      <div
        sx={{
          display: "flex",
          width: "40px",
          height: "40px",
          fontSize: "54px",
          color: "transparent",
          textShadow: `0 0 0 white`,
          bg: "text",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* <span */}
        {/*   sx={{ maxHeight: "64px", color: "text" }} */}
        {/*   role="img" */}
        {/*   aria-label="logo" */}
        {/* > */}
        {/*   {children} */}
        {/* </span> */}
      </div>
    </Link>
  );
}

export default Logo;
