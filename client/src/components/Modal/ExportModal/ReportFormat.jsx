import { useState } from 'react';
import badge from '../../../Images/png/Frame 756.png';
import { GoalFolderSection, Para, GoalRadios, CssRadio, GoalRadio, SelectPTag, GoalDetails } from './Styles';

const ReportFormat = () => {
  const [valueState, setValueState] = useState('pdf');
  const radioChange = (event) => {
    setValueState(event.target.value);
  };
  return (
    <GoalFolderSection>
      <img style={{ width: '50px', height: '50px' }} src={badge} alt="" />

      <GoalDetails>
        <h3 style={{ fontFamily: 'Lato', fontWeight: 500, fontSize: '21px', lineHeight: '25.2px' }}>Report Format</h3>
        <Para>Select the format to export report</Para>
        <GoalRadios>
          <GoalRadio style={{ border: valueState === 'pdf' ? '1px solid #00b87c' : null }}>
            <CssRadio name="format" size="small" checked={valueState === 'pdf'} onChange={radioChange} value="pdf" />
            <SelectPTag>PDF</SelectPTag>
          </GoalRadio>

          <GoalRadio style={{ border: valueState === 'excel' ? '1px solid #00b87c' : null }}>
            <CssRadio
              name="format"
              size="small"
              checked={valueState === 'excel'}
              onChange={radioChange}
              value="excel"
            />
            <SelectPTag>SpreadSheet</SelectPTag>
          </GoalRadio>
        </GoalRadios>
      </GoalDetails>
    </GoalFolderSection>
  );
};

export default ReportFormat;