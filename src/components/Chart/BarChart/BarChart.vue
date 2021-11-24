<script>
import { mixins, Bar} from "vue-chartjs";
import { DEFAULT_OPTIONS } from './helpers/constants'
export default {
  name: "BarChart",
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: () => {}
    },
    chartOptions: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    this.renderChart(this.chartData, { ...DEFAULT_OPTIONS, ...this.chartOptions });
  }
};
</script>
