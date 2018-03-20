const mutationTypes = {
  // meshes list
  REMOVE_MESH_BY_ID: 'REMOVE_MESH_BY_ID',

  // playground
  TOGGLE_FULLSCREEN_MODE: 'TOGGLE_FULLSCREEN_MODE',
  TOGGLE_MESHES_LIST: 'TOGGLE_MESHES_LIST',
  TOGGLE_CREATE_NEW_MATERIAL_FORM: 'TOGGLE_CREATE_NEW_MATERIAL_FORM',
  ADD_GEOMETRY_TO_SCENE: 'ADD_GEOMETRY_TO_SCENE',

  // material editor
  LOAD_MATERIALS_SUCCESS: 'LOAD_MATERIALS_SUCCESS',
  SET_SELECTED_MATERIAL: 'SET_SELECTED_MATERIAL',
  SET_ACTIVE_MATERIAL_TYPE_ID: 'SET_ACTIVE_MATERIAL_TYPE_ID',
  SET_PANEL_CONTROLS_WIDTH_OF_MATERIAL_EDITOR: 'SET_PANEL_CONTROLS_WIDTH_OF_MATERIAL_EDITOR',
  SET_ACTIVE_SECTION_NAME: 'SET_ACTIVE_SECTION_NAME',

  // shader editor
  SET_ACTIVE_SHADER_TYPE: 'SET_ACTIVE_SHADER_TYPE',
  SET_ACTIVE_CONTROLS_TYPE: 'SET_ACTIVE_CONTROLS_TYPE',
  TOGGLE_FOOTER_CONTROLS: 'TOGGLE_FOOTER_CONTROLS',
  SET_SHADER_VALUE_BY_TYPE: 'SET_SHADER_VALUE_BY_TYPE',
  SET_SELECTED_GLSL_PROGRAM: 'SET_SELECTED_GLSL_PROGRAM',
  LOAD_GLSL_PROGRAMS_SUCCESS: 'LOAD_GLSL_PROGRAMS_SUCCESS',
  SET_FOOTER_CONTROLS_HEIGHT: 'SET_FOOTER_CONTROLS_HEIGHT',
  SET_PANEL_CONTROLS_WIDTH_OF_SHADER_EDITOR: 'SET_PANEL_CONTROLS_WIDTH_OF_SHADER_EDITOR'
};

export default mutationTypes;
