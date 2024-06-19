import React, { useState } from 'react'
import Addsalaryslipview from '../Views/Addsalaryslipview'

const Addsalaryslip = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const handleAddModalCancel = () => {
    setAddModalVisible(false);
  };
  return (
    <div>
        <Addsalaryslipview onCancel={handleAddModalCancel}/>
    </div>
  )
}


export default Addsalaryslip
