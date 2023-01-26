import LineChart from "../../components/LineChart";
import Header from "../../components/Header";
import { Box } from "@mui/system";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="LINE CHART" subtitle="Simple line chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};
export default Line;
