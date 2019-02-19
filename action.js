export const ActionType = {
  ADDBANANA : 'ADDBANANA',
  SUBBANANA : 'SUBBANANA',
  CLEARBANANA : 'CLEARBANANA'
}

export const Addbanana = ()=> ({
  type:ActionType.ADDBANANA
})

export const Subbanana = ()=> ({
  type:ActionType.SUBBANANA
})

export const Clearbanana = ()=> ({
  type:ActionType.CLEARBANANA
})