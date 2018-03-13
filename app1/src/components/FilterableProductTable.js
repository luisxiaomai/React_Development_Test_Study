import React from 'react'
import style from "./FilterableProductTable.css"

class ProductCategoryRow extends React.Component {
    render() {
        return <tr>
            <th colSpan="2">{this.props.category}</th>
        </tr>;
    }
}
class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked
            ? this.props.product.name
            : <span style={{
                color: "red"
            }}>{this.props.product.name}</span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;
        this
            .props
            .products
            .forEach(product => {
                if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                    return;
                }
                if (product.category !== lastCategory) {
                    rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
                }
                rows.push(<ProductRow product={product} key={product.name} />);
                lastCategory = product.category;
            });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this
            .handleFilterTextInputChange
            .bind(this);
        this.handleInStockInputChange = this
            .handleInStockInputChange
            .bind(this);
    }
    handleFilterTextInputChange(e) {
        this
            .props
            .onFilterTextInput(e.target.value);
    }
    handleInStockInputChange() {
        this
            .props
            .onInstockInput();
    }
    render() {
        return (
            <form>
                <input
                    type="text"
                    className={style.searchField}
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange} />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onClick={this.handleInStockInputChange} /> {'  '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false
        };
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }
    handleFilterTextInput(filterText) {
        this.setState({ filterText });
    }
    handleInStockInput() {
        this.setState(prevState => ({
            inStockOnly: !prevState.inStockOnly
        }));
    }
    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInstockInput={this.handleInStockInput} />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
}