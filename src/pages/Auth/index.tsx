import React from "react";
import { LoginContainer, RegisterContainer } from "../../containers";
import { LoadingComponent } from "../../components";

export const AuthPage: React.FC<{}> = () => {
  const [showRegister, setShowRegister] = React.useState<boolean>(false);
  const toggleRegister = () => setShowRegister(!showRegister);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <div className="relative w-full h-screen grid lg:grid-cols-2 overflow-hidden">
      <div className="w-full relative lg:h-full h-screen">
        <img
          src="/rick_fondo.jpg"
          alt=""
          className="absolute w-full h-full object-cover lg:blur-0 blur-lg"
        />
      </div>

      {/* Forms */}
      <div className="w-full h-full lg:relative absolute">
        {/* Login */}
        <LoginContainer
          showRegister={showRegister}
          toggleRegister={toggleRegister}
        />

        {/* Register */}
        <RegisterContainer
          showRegister={showRegister}
          toggleRegister={toggleRegister}
        />
      </div>

      <LoadingComponent loading={loading} />
    </div>
  );
};
