interface AttributeDefinition {
  id: string;
  name: string;
  type: "text" | "number" | "date" | "checkbox";
}

export interface MachineType {
  id: string;
  name: string;
  attributes: AttributeDefinition[];
  titleAttributeId: string;
}
