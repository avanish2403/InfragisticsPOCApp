import React, { ChangeEventHandler } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrTemplateCellUpdatingEventArgs} from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';
import { FilterExpression, FilterFactory } from 'igniteui-react-core';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

const products = [
    { Symbol: 'GOOG', Side: 'Buy', Broker: 'Steve', Status: 'Filled', OrderQty: 2, Cumulative: '-', OrderType: 'Buy', Account: 'Account 1' },
    { Symbol: 'GOOG', Side: 'Sell', Broker: 'John', Status: 'New', OrderQty: 3, Cumulative: '-', OrderType: 'Sell', Account: 'Account 2' },
    { Symbol: 'GOOG', Side: 'Buy', Broker: 'Alex', Status: 'Cancelled', OrderQty: 4, Cumulative: '-', OrderType: 'Buy', Account: 'Account 3' },
    { Symbol: 'GOOG', Side: 'Sell', Broker: 'Smith', Status: 'New', OrderQty: 5, Cumulative: '-', OrderType: 'Sell', Account: 'Account 1' },
    { Symbol: 'GOOG', Side: 'Buy', Broker: 'Harry', Status: 'Filled', OrderQty: 6, Cumulative: '-', OrderType: 'Buy', Account: 'Account 2' },
    { Symbol: 'GOOG', Side: 'Sell', Broker: 'Johnson', Status: 'Cancelled', OrderQty: 7, Cumulative: '-', OrderType: 'Sell', Account: 'Account 3' },
    { Symbol: 'GOOG', Side: 'Buy', Broker: 'Peter', Status: 'New', OrderQty: 8, Cumulative: '-', OrderType: 'Buy', Account: 'Account 1' },
    { Symbol: 'GOOG', Side: 'Sell', Broker: 'David', Status: 'New', OrderQty: 4, Cumulative: '-', OrderType: 'Sell', Account: 'Account 2' },
    { Symbol: 'AAPL', Side: 'Buy', Broker: 'Steve', Status: 'Cancelled', OrderQty: 2, Cumulative: '-', OrderType: 'Buy', Account: 'Account 1' },
    { Symbol: 'AAPL', Side: 'Sell', Broker: 'John', Status: 'New', OrderQty: 3, Cumulative: '-', OrderType: 'Sell', Account: 'Account 2' },
    { Symbol: 'AAPL', Side: 'Buy', Broker: 'Alex', Status: 'New', OrderQty: 4, Cumulative: '-', OrderType: 'Buy', Account: 'Account 3' },
    { Symbol: 'AAPL', Side: 'Sell', Broker: 'Smith', Status: 'Cancelled', OrderQty: 5, Cumulative: '-', OrderType: 'Sell', Account: 'Account 1' },
    { Symbol: 'AAPL', Side: 'Buy', Broker: 'Harry', Status: 'New', OrderQty: 6, Cumulative: '-', OrderType: 'Buy', Account: 'Account 2' },
    { Symbol: 'AAPL', Side: 'Sell', Broker: 'Johnson', Status: 'Filled', OrderQty: 7, Cumulative: '-', OrderType: 'Sell', Account: 'Account 3' },
    { Symbol: 'AAPL', Side: 'Buy', Broker: 'Peter', Status: 'New', OrderQty: 8, Cumulative: '-', OrderType: 'Buy', Account: 'Account 1' },
    { Symbol: 'AAPL', Side: 'Sell', Broker: 'David', Status: 'Cancelled', OrderQty: 4, Cumulative: '-', OrderType: 'Sell', Account: 'Account 2' }

];

export default class DataGridColumnTypes extends React.Component<any, any> {

    public grid: IgrDataGrid;
    public filterColumn: string = "Symbol";
    public filterMode: string = "Contains";
    public filterText: string = "AAPL";
    public filterFactory: FilterFactory;
    public savedLayout: string;

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <button onClick={this.onSaveLayoutClicked} >Save</button>
                <button onClick={this.onLoadLayoutClicked} >Load</button>
                <div className="options horizontal">
                    <label className="options-label" >  Column: </label>
                    <select className="options-select" 
                    value={this.state.filterColumn}
                        onChange={this.onFilterColumnChanged}
                        >
                        <option>Symbol</option>
                        <option>Side</option>
                        <option>Broker</option>
                        <option>Status</option>
                        <option>OrderType</option>
                    </select>
                    <select className="options-select" 
                    value={this.state.filterMode}
                        onChange={this.onFilterModeChanged}
                        >
                        <option>Contains</option>
                        <option>StartsWith</option>
                        <option>EndsWith</option>
                    </select>
                    <label className="options-label"> Expression: </label>
                    <input className="options-text" type="text" name="title" value={this.state.filterText}
                       onChange={this.onFilterTextChanged} />
                </div>


                <IgrDataGrid
                    ref={this.onGridRef}
                    height="100%"
                    width="100%"
                    rowHeight="50"
                    autoGenerateColumns="false"
                    dataSource={products}
                    defaultColumnMinWidth={100}
                    isColumnOptionsEnabled="true"
                    filterUIType="ColumnOptions"
                    >
                    
                <IgrTextColumn field="Symbol" horizontalAlignment="center" />
                <IgrTextColumn field="Side" horizontalAlignment="center" />
                <IgrTextColumn field="Broker" horizontalAlignment="center" />
                {/* <IgrTextColumn field="Status" horizontalAlignment="center" /> */}
                <IgrTemplateColumn field="Status" headerText="Status" horizontalAlignment="center"
                    paddingLeft="10" paddingRight="0"
                        cellUpdating={this.onStatusCellUpdating} width="*>180"/>
                <IgrTextColumn field="OrderQty" horizontalAlignment="center" />
                <IgrTextColumn field="Cumulative" horizontalAlignment="center" />
                <IgrTextColumn field="OrderType" horizontalAlignment="center" />
                <IgrTextColumn field="Account" horizontalAlignment="center" />


               </IgrDataGrid>
            </div>
        );
    }

    constructor(props: any) {
        super(props);

        this.state = { filterText: this.filterText, filterMode: this.filterMode, filterColumn: this.filterColumn }
    }

    public onSaveLayoutClicked = () => {
        console.log(this.grid);
        this.grid.saveLayout();
        this.savedLayout = this.grid.saveLayout();
    }

    public onLoadLayoutClicked = () => {
        this.grid.loadLayout(this.savedLayout);
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
        this.applyFilter();
    }

    public onFilterTextChanged = (e: any) => {
        this.filterText = e.target.value;
        this.setState({filterText: e.target.value});
        this.applyFilter();
    }

    public onFilterModeChanged = (e: any) => {
        this.filterMode = e.target.value;
        this.setState({filterMode: e.target.value});
        this.applyFilter();
    }

    public onFilterColumnChanged = (e: any) => {
        this.filterColumn = e.target.value;
        this.setState({filterColumn: e.target.value});
        this.applyFilter();
    }

    public applyFilter()
    {
        this.grid.filterExpressions.clear();
        if (this.filterText === "") {
            return;
        }

        this.filterFactory = new FilterFactory();
        const expression = this.filterText.toUpperCase();
        const column = this.filterFactory.property(this.filterColumn).toUpper();

        let filter: FilterExpression;
        if (this.filterMode === "Contains")
        {
            filter = column.contains(expression)
        }
        else if (this.filterMode === "StartsWith")
        {
            filter = column.startsWith(expression);
        }
        else
        {
            filter = column.endsWith(expression);
        }

        this.grid.filterExpressions.add(filter);
    }

    public onStatusCellUpdating = (s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) => {
        const content = e.content as HTMLDivElement;
        const info = e.cellInfo as IgrTemplateCellInfo;
        const status = info.rowItem.Status;
        let gaugeValue: HTMLSpanElement | null = null;
        let gaugeBar: HTMLDivElement | null = null;

        if (content.childElementCount === 0) {
            gaugeValue = document.createElement("span");
            gaugeValue.style.margin = "0px";
            gaugeValue.style.marginTop = "2px";
            gaugeValue.style.padding = "0px";
            gaugeValue.style.fontFamily = "Verdana";
            gaugeValue.style.fontSize = "13px";
            gaugeValue.style.textAlign = "center";

            gaugeBar = document.createElement("div");
            gaugeBar.style.background = "#7f7f7f";
            gaugeBar.style.padding = "0px";
            gaugeBar.style.margin = "0px";
            gaugeBar.style.height = "6px";
            gaugeBar.style.left = "0px";
            gaugeBar.style.top = "0px";
            gaugeBar.style.position = "relative";

            const gauge = document.createElement("div");
            gauge.style.background = "#dddddd";
            gauge.style.padding = "0px";
            gauge.style.margin = "0px";
            gauge.style.height = "6px";
            gauge.style.marginTop = "8px";
            gauge.style.width = "100%";
            gauge.appendChild(gaugeBar);

            content.style.verticalAlign = "center";
            content.style.lineHeight = "normal";
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.height = "100%";
            content.style.width = "calc(100% - 2rem)";
            content.style.marginRight = "1rem";
            content.style.marginLeft = "1rem";

            content.appendChild(gauge);
            content.appendChild(gaugeValue);
        } else {
            const gauge = content.children[0];
            gaugeBar = gauge.children[0] as HTMLDivElement;
            gaugeValue = content.children[1] as HTMLSpanElement;
        }

        // conditional formatting:
        if (status === "Cancelled") {
            gaugeValue.style.color = "rgb(211, 17, 3)";
            gaugeBar.style.background = "rgb(211, 17, 3)";
        }
        else if (status === "New") {
            gaugeValue.style.color = "rgb(21, 190, 6)";
            gaugeBar.style.background = "rgb(21, 190, 6)";
        }
        else {
            gaugeValue.style.color = "blue";
            gaugeBar.style.background = "blue";
        }
        gaugeValue.textContent = status;
    }
    

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridColumnTypes/>);
