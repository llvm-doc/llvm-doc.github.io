var classllvm_1_1SelectionDAGISel =
[
    [ "OPFL_None", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aa15a21d35d8490b6286c327b7a12857a4", null ],
    [ "OPFL_Chain", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aa7638541ce06fd89565a0ba8c84161b9c", null ],
    [ "OPFL_GlueInput", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aa1cb68e136df2791b9b9442d53c373ccf", null ],
    [ "OPFL_GlueOutput", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aad6ee2ea31428750f42b7db36bf86737e", null ],
    [ "OPFL_MemRefs", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aaa0548d260560d7be090cd8b265efa290", null ],
    [ "OPFL_Variadic0", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aae796ac3b590c76e2fc0a4afc64322564", null ],
    [ "OPFL_Variadic1", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aaf7da91abfaa722a01c36b72d3c9abc38", null ],
    [ "OPFL_Variadic2", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aaf057b734333f88d8c4ca99050e8375e3", null ],
    [ "OPFL_Variadic3", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aa078b9bf2d043069e2695ff7b7f64cf49", null ],
    [ "OPFL_Variadic4", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aa4e7cb657e4376127470bb3d2cc7fc00b", null ],
    [ "OPFL_Variadic5", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aa74daf51bcbaca910af806a14f1892dd0", null ],
    [ "OPFL_Variadic6", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aaebe26208e4e8b7a38b1a05a1b770d769", null ],
    [ "OPFL_VariadicInfo", "classllvm_1_1SelectionDAGISel.html#a7d6d7852251362b540e817f04cb0bd6aa595afa3f4e6a97e0ae7c70ae9ff0963f", null ],
    [ "BuiltinOpcodes", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2", [
      [ "OPC_Scope", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a00188f1375143944dbffe1beb1eb3297", null ],
      [ "OPC_RecordNode", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2ab10ccf4011b7d68e3fff1cbb338a57d3", null ],
      [ "OPC_RecordChild0", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2ac2d86704b188ca386078d06e8ccd69b7", null ],
      [ "OPC_RecordChild1", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a045a4df90d2c6e9d694d6acf5523f70d", null ],
      [ "OPC_RecordChild2", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2af7f508ff13976380cf892b2ee6aaf626", null ],
      [ "OPC_RecordChild3", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a2a5b1298d30ff2f9124cf1619b4736a3", null ],
      [ "OPC_RecordChild4", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a89d569a5498ad39550c58760f7b78b15", null ],
      [ "OPC_RecordChild5", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a75516657cf8e999f42f4465e9f3d36af", null ],
      [ "OPC_RecordChild6", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a6f70cafa3e6d4d88796ccb1d42c771f4", null ],
      [ "OPC_RecordChild7", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a116d7d851a1d3a533aaa1debd4a3ce61", null ],
      [ "OPC_RecordMemRef", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a6815b3a19b46de45ad1d6ca08dc18f10", null ],
      [ "OPC_CaptureGlueInput", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a23a17ff570de8decffae4f71a8093c9f", null ],
      [ "OPC_MoveChild", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a0fc7a263e2171d96d675072e92e18769", null ],
      [ "OPC_MoveParent", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a198333ee8be077e6255b7efbbb2f8b98", null ],
      [ "OPC_CheckSame", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2ac17440039d284c65ee3b7d5f9989f50c", null ],
      [ "OPC_CheckChild0Same", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2ac4ef97ce82a9ec47ffddf66e304a3790", null ],
      [ "OPC_CheckChild1Same", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a8fa80a632f8f5c2348cdff0eb41e66fc", null ],
      [ "OPC_CheckChild2Same", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a0a813f9abf776d7caaa06e5d72c94ecc", null ],
      [ "OPC_CheckChild3Same", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2aaeb67823b90670973d26bbaa91c97ed2", null ],
      [ "OPC_CheckPatternPredicate", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a46a1f303e35f6feb3dabf3e588ef109b", null ],
      [ "OPC_CheckPredicate", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a9bcd7019459f96271977dc7b7a0e42c7", null ],
      [ "OPC_CheckOpcode", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2ae10cd161a6495fede5121b564d10ce2a", null ],
      [ "OPC_SwitchOpcode", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a2827e53ef7420b3a5ad346366fa927b5", null ],
      [ "OPC_CheckType", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2ae3fd6bdaf8484f407123c016fac17bbb", null ],
      [ "OPC_SwitchType", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a0fdec182c9ee56480009743734d0e9f8", null ],
      [ "OPC_CheckChild0Type", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a8c35dbaea22168300c0417f650be72a5", null ],
      [ "OPC_CheckChild1Type", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a5bd4c5f999490a0b61230d3ed58122b7", null ],
      [ "OPC_CheckChild2Type", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a7e7290f899b310f10094103102451001", null ],
      [ "OPC_CheckChild3Type", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a04f261bfda135591bf8341f6a20a665e", null ],
      [ "OPC_CheckChild4Type", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a8f58a385e467906cfa60bb96ec84508f", null ],
      [ "OPC_CheckChild5Type", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a378a8e72b2fc7c4a0cf9ac5ae724a0ea", null ],
      [ "OPC_CheckChild6Type", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a136ee3a03a1bab562927a4e0ac11fbbc", null ],
      [ "OPC_CheckChild7Type", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a1fd783d02f34d56b77c1907ed6e71966", null ],
      [ "OPC_CheckInteger", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a797344a4f66b9d2c2c4487a3bcffa98f", null ],
      [ "OPC_CheckCondCode", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a8f80287bd79b4dda1de0fb810dbb0ecd", null ],
      [ "OPC_CheckValueType", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a25c8c32aaa6b79885859cebc7ff11ae6", null ],
      [ "OPC_CheckComplexPat", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2af337a75552fc71e0a3fe416c42029934", null ],
      [ "OPC_CheckAndImm", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a762f7415efdb5556233c801b1ec86509", null ],
      [ "OPC_CheckOrImm", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a07f7c58b8c512a9e943c07c7210b6f72", null ],
      [ "OPC_CheckFoldableChainNode", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a6dd26f64fb30f256036e93271c1560fd", null ],
      [ "OPC_EmitInteger", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a4d26ece079833899ec7dfc775b6e2628", null ],
      [ "OPC_EmitRegister", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a61b4fade49d0ca64657a3030f46495d2", null ],
      [ "OPC_EmitRegister2", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2abd736102925abf791e7f9df182241783", null ],
      [ "OPC_EmitConvertToTarget", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2af63f0634fcc36241cccfe4a2e57266f2", null ],
      [ "OPC_EmitMergeInputChains", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a5a9ff4093959a69b182c880dadf52829", null ],
      [ "OPC_EmitMergeInputChains1_0", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a678201f50ea2342113a11caedb83b8d4", null ],
      [ "OPC_EmitMergeInputChains1_1", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a326d1d32d94b2090179b5ea52d76f359", null ],
      [ "OPC_EmitCopyToReg", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a34176e51f3d862614aedb0c80d053daf", null ],
      [ "OPC_EmitNodeXForm", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2ad838222111c653f48a357804d174b813", null ],
      [ "OPC_EmitNode", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a18ced310ef5a5b64fd138b7fddafb7b5", null ],
      [ "OPC_MorphNodeTo", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a835330e877233ea5d7faee0e80f16c43", null ],
      [ "OPC_MarkGlueResults", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a85094fdbb1ef3122346d18512b2344ec", null ],
      [ "OPC_CompleteMatch", "classllvm_1_1SelectionDAGISel.html#a32bc192d568793fb156fd6d6b75cb3c2a38a7e398a5168f046f5f475419fd12fd", null ]
    ] ],
    [ "SelectionDAGISel", "classllvm_1_1SelectionDAGISel.html#a4449b6a2240a71d9fe77a79a85a83153", null ],
    [ "~SelectionDAGISel", "classllvm_1_1SelectionDAGISel.html#aab3f5f27748274f8005105493a8c87d9", null ],
    [ "CheckAndMask", "classllvm_1_1SelectionDAGISel.html#ad51b12121dcca6c724763203d1132498", null ],
    [ "CheckComplexPattern", "classllvm_1_1SelectionDAGISel.html#a3b843300218cb16620b8958ac4883fc1", null ],
    [ "CheckNodePredicate", "classllvm_1_1SelectionDAGISel.html#a63d859c0c780cc6883e8e7e18c48fbf9", null ],
    [ "CheckOrMask", "classllvm_1_1SelectionDAGISel.html#a34ef61e9e1f8ff4fa700ad52648e19cf", null ],
    [ "CheckPatternPredicate", "classllvm_1_1SelectionDAGISel.html#a34b4d24412618dbb8dd73e03fcc389aa", null ],
    [ "EmitFunctionEntryCode", "classllvm_1_1SelectionDAGISel.html#ad923a79b4e8e6f746900b6cd360ae8b6", null ],
    [ "getAnalysisUsage", "classllvm_1_1SelectionDAGISel.html#aa6e3daee5aa2faf95a6e846301eba584", null ],
    [ "getNumFixedFromVariadicInfo", "classllvm_1_1SelectionDAGISel.html#a44db62a12476aec69cc958a5502f94df", null ],
    [ "getTargetLowering", "classllvm_1_1SelectionDAGISel.html#a6f07cb4883e6032079b6539904e96800", null ],
    [ "IsLegalToFold", "classllvm_1_1SelectionDAGISel.html#afde899bbadc9622ad6108694d44d7f36", null ],
    [ "IsProfitableToFold", "classllvm_1_1SelectionDAGISel.html#a7c45584212fcb230d5bcee0754b3ce64", null ],
    [ "PostprocessISelDAG", "classllvm_1_1SelectionDAGISel.html#a2070933838365d7033fa1038ef0bf22c", null ],
    [ "PreprocessISelDAG", "classllvm_1_1SelectionDAGISel.html#a9bcf997fee822474340db5e11c5217f7", null ],
    [ "ReplaceUses", "classllvm_1_1SelectionDAGISel.html#a84e771c0f56c984d8ee4a85c0cb46ed3", null ],
    [ "ReplaceUses", "classllvm_1_1SelectionDAGISel.html#a67ef64ef7639ff3e2f43230a0623d33c", null ],
    [ "ReplaceUses", "classllvm_1_1SelectionDAGISel.html#a9afa715cd3c35b04b6637eb74ec22c96", null ],
    [ "runOnMachineFunction", "classllvm_1_1SelectionDAGISel.html#ac27df519719929bb886ae92fca30b6d2", null ],
    [ "RunSDNodeXForm", "classllvm_1_1SelectionDAGISel.html#a888ef6531e4abe62f1c03acd578461fd", null ],
    [ "Select", "classllvm_1_1SelectionDAGISel.html#a5276d410489e22e2f40aec94d12475cb", null ],
    [ "SelectCodeCommon", "classllvm_1_1SelectionDAGISel.html#a301512eb377440a6ab0ab574ca7b82e2", null ],
    [ "SelectInlineAsmMemoryOperand", "classllvm_1_1SelectionDAGISel.html#ab063178098b4d0bc5a50a94195c28590", null ],
    [ "SelectInlineAsmMemoryOperands", "classllvm_1_1SelectionDAGISel.html#a93c0fc0673147d4ecb1e4731f9cce4ad", null ],
    [ "AA", "classllvm_1_1SelectionDAGISel.html#a77fb1a1550d29830789e60ab9262bcae", null ],
    [ "CurDAG", "classllvm_1_1SelectionDAGISel.html#a2b37615f95f3e2fdd5564188c0965132", null ],
    [ "DAGSize", "classllvm_1_1SelectionDAGISel.html#a3206f1a81f9832fbffe4fe3cb2be4d52", null ],
    [ "FuncInfo", "classllvm_1_1SelectionDAGISel.html#a67db3969c1e61b8d020a3817d1f755cb", null ],
    [ "GFI", "classllvm_1_1SelectionDAGISel.html#a5f299b9982f79a3a122ba449ea28ef4b", null ],
    [ "ID", "classllvm_1_1SelectionDAGISel.html#a1f3ebb920b40c460c3b278c169cc67e3", null ],
    [ "LibInfo", "classllvm_1_1SelectionDAGISel.html#a4539a142623c3a6f33247c1f291b742e", null ],
    [ "MF", "classllvm_1_1SelectionDAGISel.html#a23107e32342f5488a5edfa71aff54700", null ],
    [ "OptLevel", "classllvm_1_1SelectionDAGISel.html#a1a7c2a3380a9f770ba082a070c592df6", null ],
    [ "RegInfo", "classllvm_1_1SelectionDAGISel.html#a303effb01b1d92c71b15cc25b2438917", null ],
    [ "SDB", "classllvm_1_1SelectionDAGISel.html#a312f923b3a36e342969c005f7779f761", null ],
    [ "TM", "classllvm_1_1SelectionDAGISel.html#a0ead78650333eefc4d5591ca3db9ed4b", null ],
    [ "TTI", "classllvm_1_1SelectionDAGISel.html#a16c7f613ac55c5640f8af64036f63693", null ]
];