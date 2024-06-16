import { BooleanNumber, LocaleType, SheetTypes } from '@univerjs/core';

export const DEFAULT_WORKBOOK_DATA = {

  id: 'workbook-01',
  locale: LocaleType.ZH_CN,
  name: 'universheet',

  appVersion: '3.0.0-alpha',
  sheets: {
    'sheet-01': {
      type: SheetTypes.GRID,
      id: 'sheet-01',
      cellData: {
        0: {
          0: {
            v: 'Hello World',
          },
        },
      },
      name: 'sheet1',

      hidden: BooleanNumber.FALSE,
      rowCount: 100,
      columnCount: 20,
      zoomRatio: 1,
      scrollTop: 200,
      scrollLeft: 100,
      defaultColumnWidth: 93,
      defaultRowHeight: 27,
      status: 1,
      showGridlines: 1,
      hideRow: [],
      hideColumn: [],
      rowHeader: {
        width: 46,
        hidden: BooleanNumber.FALSE,
      },
      columnHeader: {
        height: 20,
        hidden: BooleanNumber.FALSE,
      },
      rightToLeft: BooleanNumber.FALSE,
      pluginMeta: {},
    },
    'sheet-02': {
      type: SheetTypes.GRID,
      id: 'sheet-02',
      cellData: {
        0: {
          0: {
            v: 'Hello World--2',
          },
        },
      },
      name: 'sheet-02',
    }
  }
};