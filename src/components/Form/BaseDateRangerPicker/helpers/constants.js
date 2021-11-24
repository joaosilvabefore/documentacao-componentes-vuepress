import moment from 'moment';

const CURRENT_DATE = moment();

export const DEFAULT_LOCALE = {
  locale: 'pt-br',
  applyLabel: "Aplicar",
  cancelLabel: 'Limpar',
  fromLabel: "De",
  toLabel: "Até",
  customRangeLabel: "Customizado",
  weekLabel: "W",
  format: "dd/mm/yyyy",
  firstDay: 0,
  daysOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
};

export const DEFAULT_RANGES = {
  'Vitalício': [null, null],
  'Hoje': [CURRENT_DATE.toDate(), CURRENT_DATE.toDate()],
  'Ontem': [CURRENT_DATE.subtract(1, 'days').toDate(), CURRENT_DATE.subtract(1, 'days').toDate()],
  'Últimos 7 dias': [CURRENT_DATE.subtract(6, 'days').toDate(), CURRENT_DATE.toDate()],
  'Últimos 14 dias': [CURRENT_DATE.subtract(13, 'days').toDate(), CURRENT_DATE.toDate()],
  'Últimos 30 dias': [CURRENT_DATE.subtract(29, 'days').toDate(), CURRENT_DATE.toDate()],
  'Esta semana': [CURRENT_DATE.startOf('isoweek').toDate(), CURRENT_DATE.endOf('isoweek').toDate()],
  'Semana passada': [CURRENT_DATE.subtract(6, 'days').startOf('isoweek').toDate(), CURRENT_DATE.subtract(6, 'days').endOf('isoweek').toDate()],
  'Este mês': [CURRENT_DATE.startOf('month').toDate(), CURRENT_DATE.endOf('month').toDate()],
  'Último mês': [CURRENT_DATE.subtract(1, 'month').startOf('month').toDate(), CURRENT_DATE.subtract(1, 'month').endOf('month').toDate()],
};

export default {
  DEFAULT_LOCALE,
  DEFAULT_RANGES
}