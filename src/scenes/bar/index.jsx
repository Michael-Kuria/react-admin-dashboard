import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { Box } from "@mui/system";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Records represented in a barchart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
