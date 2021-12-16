import React, { useEffect, useState } from "react";
import { Input, AutoComplete, Row, Col, Divider, Button } from "antd";

import "./style.scss";

import {getOptions, findCompanyByDomain, findCompanyByEmail} from './clearbitFetchMethods'

const validURL = (str) => {
  let pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};
const renderItem = ({ name, logo, domain }) => ({
  value: domain,
  label: (
    <div className="option-item">
      <img src={logo} height="30" alt="logo" />
      <span style={{marginLeft: 10}}>{name}</span>
      <span style={{marginLeft: 'auto'}}>{domain}</span>
    </div>
  ),
});

// type ClearbitCoLookupProps = {
//   onSelect: (company) => void
// }

export const ClearbitCoLookup = ({onSelect}) => {
  const [options, setOptions] = useState([]);
  const [select, setSelect] = useState("");
  const [company, setCompany] = useState(null);
  // const [company, setCompany] = useState({});

  const onSearch = async (e) => {
    let value = e.target.value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      const response = await findCompanyByEmail(value)
      if (response) {
        let data = [];
        data.push(
          renderItem({
            logo: response.company.logo,
            name: response.company.name,
            domain: response.company.domain,
          })
        );
        setOptions(data);
      }
    } else if (validURL(value)) {
      const company = await findCompanyByDomain(value)
      let data = [];
          data.push(
            renderItem({
              logo: company.logo,
              name: company.name,
              domain: company.domain,
            })
          );
          setOptions(data);
    } else {
      if (value.length >= 2) {
        let v = await getOptions(value);
        let data = [];
        v.forEach((element) => {
          data.push(renderItem(element));
        });
        setOptions(data);
      }
    }
  };

  const findAndSetCompany = async (domain) => {
    const company = await findCompanyByDomain(domain)
    setCompany(company);
    if (!!onSelect) onSelect(company)
  }

  useEffect(() => {
    if (select !== "") findAndSetCompany(select)
  }, [select]);

  console.log('options', options)

  return (
    <div id="company-lookup">
      <div className="search">
        {/* <p>Add a New Company</p> */}
        <div className="search-bar">
          <AutoComplete
            dropdownClassName="search-dropdown"
            dropdownMatchSelectWidth={400}
            style={{
              width: '50%',
            }}
            onSelect={(e) => setSelect(e)}
            options={options}
            disablePortal
          >
            <Input.Search
              size="large"
              placeholder="Name, website or representative email"
              onChange={onSearch}
            />
          </AutoComplete>
          {/* <Button type="primary" size="large">
            Create Company
          </Button> */}
        </div>
      </div>
      {company && <div className="content">
        <Row className="content-margin">
          <Col span={4}>
            <span>Name</span>
            <p>{company.name}</p>
          </Col>
          <Col span={4}>
            <span>Founded Year</span>
            <p>{company.foundedYear}</p>
          </Col>
          <Col span={4}>
            <span>Type</span>
            <p>{company.type}</p>
          </Col>
          <Col span={4}>
            <span>Employees</span>
            <p>{company.metrics?.employees}</p>
          </Col>
          <Col span={8}>
            <span>Estimated Annual Revenue</span>
            <p>{company.metrics?.estimatedAnnualRevenue}</p>
          </Col>
        </Row>
        <Divider />
        <Row className="content-margin">
          <Col span={16}>
            <Row>
              <Col span={12}>
                <span>Location</span>
                <p>{company.location}</p>
              </Col>
              <Col span={12}>
                <span>Timezone</span>
                <p>{company?.timeZone}</p>
              </Col>
            </Row>
            <div></div>
            <Divider />
          </Col>
          <Col span={8} className="content-margin">
            <div>
              <span>Description</span>
              <p>{company.description}</p>
            </div>
            <Divider />
            <div>
              <span>Tags</span>
              <p>{company.tags?.join(" & ")}</p>
            </div>
            <Divider />
            <div>
              <span>Industry</span>
              <p>{company.industry}</p>
            </div>
          </Col>
        </Row>
      </div>}
    </div>
  );
};
