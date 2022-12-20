import React from 'react'
import "./Sidebar.css"
import SidebarItem from './SidebarItem'

export default function Sidebar() {
    const heading1="Related Category"
    const items1=["Paracetamol Tablets","Paracetamol Syrup","Aceclofenac","Magaldrate Simethicone Oral Suspension","Mefenamic Paracetamol Syrup"]
    
    const heading2="Related Brands"
    const items2=["Cipmol Paracetamol","Pandal Paracetamol tablets","Combiflam","Crocin Tablets","Calpol Paracetamol Tablets","Sumo Tablet"]
    
    const heading3="Business Type"
    const items3=["Wholesaler","Manufacturer","Retailer","Exporter"]
    
    const heading4="Strength"
    const items4=["500 mg","650 mg"]
    
    const heading5="Manufacturer"
    const items5=["Intas Phramaceutical Ltd","Alkem Laboratories Ltd"]

    const heading6="Prescription/Non prescription"
    const items6=["Intas Phramaceutical Ltd","Alkem Laboratories Ltd"]
  return (
    <div className='sidebar'>
        <SidebarItem heading={heading1} items={items1}/>
        <SidebarItem heading={heading2} items={items2}/>
        <SidebarItem heading={heading3} items={items3}/>
        <SidebarItem heading={heading4} items={items4}/>
        <SidebarItem heading={heading5} items={items5}/>
        <SidebarItem heading={heading6} items={items6}/>
    </div>
  )
}
