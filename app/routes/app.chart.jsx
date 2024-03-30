/*import {
  Button,
  Modal,
  LegacyStack,
  Frame,
  Icon,
  Scrollable,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import {
  MaximizeIcon,
  MinimizeIcon
} from "@shopify/polaris-icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];*/

/*function chart() {
  const [active, setActive] = useState(false);
  //const [checked, setChecked] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  //const handleCheckbox = useCallback(() => setChecked(), []);

  const activator = (
    <Button onClick={toggleActive}>
      {" "}
      <Icon source={MaximizeIcon} tone="base" />
    </Button>
  );

  return (
    <div style={{ height: "500px" }}>
      <Frame>
        <Modal
          size="medium"
          activator={activator}
          open={active}
          onClose={toggleActive}
        >
          <Modal.Section>
            <BarChart
              width={600}
              height={500}
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="5 5" />

              <XAxis dataKey="name" />

              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />

              <Tooltip />
              <Legend />

              <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </Modal.Section>
        </Modal>
      </Frame>
    </div>
  );
}

export default chart;*/

/*function Chart() {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const activator = (
    <Button onClick={toggleActive}>
      <Icon source={active ? MinimizeIcon : MaximizeIcon} tone="base" />
    </Button>
  );

  function Maximize() {
    return (
      <div style={{ height: "500px" }}>
        <Frame>
          <Modal
            size="medium"
            activator={activator}
            open={active}
            onClose={toggleActive}
          >
            <Modal.Section>
              <BarChart
                width={600}
                height={500}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </Modal.Section>
          </Modal>
        </Frame>
      </div>
    );
  }

  function Minimize() {
    return (
  
        <Scrollable focusable>
          <Button onClick={toggleActive}>
          <Icon source={MaximizeIcon} tone="base" />
        </Button>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
        </BarChart>
        
        </Scrollable>
        
      
    );
  }

  return <>{active ? <Maximize /> : <Minimize />}</>;
}

export default Chart;*/

import React, { useState, useCallback } from "react";
import { Button, Modal, Frame, Icon, Scrollable } from "@shopify/polaris";
import { MaximizeIcon, MinimizeIcon } from "@shopify/polaris-icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const generateRandomData = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    name: `Page ${String.fromCharCode(65 + index)}`,
    uv: Math.floor(Math.random() * 5000),
    pv: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  }));
};

function Chart() {
  const [active, setActive] = useState(false);
  const [data, setData] = useState(generateRandomData());

  const toggleActive = useCallback(() => {
    setActive((active) => !active);
    if (!active) {
      setData(generateRandomData());
    }
  }, [active]);

  const activator = (
    <Button onClick={toggleActive}>
      <Icon source={active ? MinimizeIcon : MaximizeIcon} tone="base" />
    </Button>
  );

  function Maximize() {
    return (
      
        <Frame>
          <Modal
            size="medium"
            activator={activator}
            open={active}
            onClose={toggleActive}
          >
            <Modal.Section>
             
                <BarChart
                  width={600}
                  height={500}
                  data={data}
                  margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 20,
                  }}
                >
                  {/* ... (unchanged chart configuration) */}
                  <CartesianGrid strokeDasharray="5 5" />
                  <XAxis dataKey="name" stroke="#000000" />
                  <YAxis yAxisId="left" orientation="left" stroke="#000000" />
                  <YAxis yAxisId="right" orientation="right" stroke="#000000" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="pv" fill="#ffff00" />
                  <Bar yAxisId="right" dataKey="uv" fill="#008000" />
                </BarChart>
             
            </Modal.Section>
          </Modal>
        </Frame>
    );
  }

  function Minimize() {
    return (
      <Scrollable focusable>
        <Button onClick={toggleActive}>
          <Icon source={MaximizeIcon} tone="base" />
        </Button>
        
         
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#000000" />
            <YAxis yAxisId="left" orientation="left" stroke="#000000" />
            <YAxis yAxisId="right" orientation="right" stroke="#000000" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="pv" fill="#fff000" />
            <Bar yAxisId="right" dataKey="uv" fill="#008000" />
          </BarChart>
          
    
      </Scrollable>
    );
  }

  return <>{active ? <Maximize /> : <Minimize />}</>;
}

export default Chart;