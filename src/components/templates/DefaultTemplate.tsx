import { useState } from "react";
import { Card } from "react-bootstrap";
import { Colors } from "../../constants/Colors";
import GrowSpinner from "../UI/atoms/Spinners/GrowSpinner";
import SideBar from "../UI/organisms/Sidebar/SideBar";

/**
 *
 * @param children The JSXElements to be displayed inside of the template
 * @returns JSXElement
 */

interface DefaultTemplateProps {
  children: React.JSX.Element;
  loaded?: boolean;
}

const DefaultTemplate = ({ children, loaded = true }: DefaultTemplateProps) => {
  return (
    <div className="d-flex flex-row vh-100 w-100">
      <SideBar />
      <div
        className="p-5 w-100"
        style={{
          backgroundColor: Colors.background,
        }}
      >
        <Card className="h-100 bg-dark text-light">
          {loaded ? (
            children
          ) : (
            <div className="h-100 d-flex justify-content-center align-items-center">
              <GrowSpinner />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DefaultTemplate;
