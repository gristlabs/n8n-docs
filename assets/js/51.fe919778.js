(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1032:function(e,t,o){e.exports=o.p+"assets/img/workflow.da5cc88e.png"},1033:function(e,t,o){e.exports=o.p+"assets/img/Airtable_node.9dea397a.png"},1034:function(e,t,o){e.exports=o.p+"assets/img/Mailcheck_node.35ce1c18.png"},1035:function(e,t,o){e.exports=o.p+"assets/img/Set_node.11d4b2ac.png"},1036:function(e,t,o){e.exports=o.p+"assets/img/Airtable1_node.adb462c4.png"},1888:function(e,t,o){"use strict";o.r(t);var a=o(27),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mailcheck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mailcheck"}},[e._v("#")]),e._v(" Mailcheck")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.mailcheck.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mailcheck"),a("OutboundLink")],1),e._v(" is an application that allows you to clean your subscription list from bounces and enrich data with customers.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Mailcheck/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("Resource",{attrs:{node:"n8n-nodes-base.mailcheck"}}),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to validate emails stored in Airtable using the Mailcheck node. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/1055",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Mailcheck")])]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1)]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1032),alt:"A workflow with the Mailcheck node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-airtable-node-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-airtable-node-list"}},[e._v("#")]),e._v(" 2. Airtable node (List)")]),e._v(" "),a("p",[e._v("Create a table like "),a("a",{attrs:{href:"https://airtable.com/shrDUFXWoHCuJjYjT",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),a("OutboundLink")],1),e._v(" in your Airtable base. The Airtable node will list all the records from a table.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select the 'List' option from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the Base ID in the "),a("em",[a("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),a("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),a("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID there.")]),e._v(" "),a("li",[e._v("Enter the name of your table in the "),a("em",[a("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node returns all the records from the table.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1033),alt:"Using the Airtable node to list data from an Airtable table"}})]),e._v(" "),a("h3",{attrs:{id:"_2-mailcheck-node-check-email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mailcheck-node-check-email"}},[e._v("#")]),e._v(" 2. Mailcheck node (check: email)")]),e._v(" "),a("p",[e._v("This node will check the emails that got returned by the previous node.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Mailcheck node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Mailcheck/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"2"}},[a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Email")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > fields > email. You can also add the following expression: "),a("code",[e._v('{{$json["fields"]["Email"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node checks the email that got returned by the previous node.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1034),alt:"Using the Mailcheck node to check email"}})]),e._v(" "),a("h3",{attrs:{id:"_3-set-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),a("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" button and select 'Boolean' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Valid")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > mxExists. You can also add the following expression: "),a("code",[e._v('{{$json["mxExists"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("ID")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Airtable > Output Data > JSON > id. You can also add the following expression: "),a("code",[e._v('{{$node["Airtable"].json["id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node sets the value for "),a("code",[e._v("Valid")]),e._v(" and "),a("code",[e._v("ID")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1035),alt:"Using the Set node to set data to be updated by the Airtable node"}})]),e._v(" "),a("h3",{attrs:{id:"_4-airtable-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-airtable-update"}},[e._v("#")]),e._v(" 4. Airtable (Update)")]),e._v(" "),a("p",[e._v("This node will update the Valid field in the table.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous Airtable node.")]),e._v(" "),a("li",[e._v("Select 'Update' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Base ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Airtable > Parameters > application. You can also add the following expression: "),a("code",[e._v('{{$node["Airtable"].parameter["application"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Table")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Airtable > Parameters > table. You can also add the following expression: "),a("code",[e._v('{{$node["Airtable"].parameter["table"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Id")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > ID. You can also add the following expression: "),a("code",[e._v('{{$json["ID"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Toggle "),a("em",[a("strong",[e._v("Update All Fields")])]),e._v(" to "),a("code",[e._v("false")]),e._v(". This option will update only the fields that we specify.")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Valid")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node updates the Valid field in the table.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1036),alt:"Using the Airtable node to update data of a record"}})])],1)}),[],!1,null,null,null);t.default=n.exports}}]);