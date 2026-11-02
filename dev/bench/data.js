window.BENCHMARK_DATA = {
  "lastUpdate": 1793661285216,
  "repoUrl": "https://github.com/phux/phpactor",
  "entries": {
    "Phpactor Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "47555435+AdzerKI@users.noreply.github.com",
            "name": "Konstantin Adzer",
            "username": "AdzerKI"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ed86525efc04aafaaa1e129c4cdae4ea9cea15a",
          "message": "Create the references progress token and end the progress when finding references fails (#3081)",
          "timestamp": "2026-10-21T22:18:27+01:00",
          "tree_id": "e5c33262f0725726f182a48927dd626ab893d12f",
          "url": "https://github.com/phux/phpactor/commit/3ed86525efc04aafaaa1e129c4cdae4ea9cea15a"
        },
        "date": 1793661284376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 10.781148727984334,
            "range": "± 1.48%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 178.45536007827417,
            "range": "± 1.13%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.3646438356164037,
            "range": "± 1.81%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.398681017612656,
            "range": "± 1.95%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 0.02756109589041067,
            "range": "± 2.26%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 0.028975068493150492,
            "range": "± 2.56%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 0.05368575342465765,
            "range": "± 1.30%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 0.01578485322896283,
            "range": "± 2.24%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 0.09595945205479367,
            "range": "± 1.53%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 637,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1665,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 0.05872790606653668,
            "range": "± 1.61%",
            "unit": "ms",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 19.023805479452154,
            "range": "± 0.16%",
            "unit": "ms",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 14.938800391389043,
            "range": "± 1.50%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 14.760904109588965,
            "range": "± 2.22%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.16159999999999972,
            "range": "± 8.68%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.16797749510763169,
            "range": "± 15.71%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.16203796477495405,
            "range": "± 1.25%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.16295675146771524,
            "range": "± 1.79%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.16032328767123386,
            "range": "± 1.55%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.16536908023483696,
            "range": "± 1.95%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.16073228962818184,
            "range": "± 2.04%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.6376078277886668,
            "range": "± 1.03%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05381448140900242,
            "range": "± 3.58%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.14079060665362028,
            "range": "± 7.54%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13918786692759288,
            "range": "± 2.67%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.14243835616438344,
            "range": "± 8.08%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.14006653620352244,
            "range": "± 6.57%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.08506653620352252,
            "range": "± 8.67%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1325719,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 332,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 366,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 329,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 135351,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 101203.62426614482,
            "range": "± 184.10%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1.60448727984346,
            "range": "± 2.84%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3.1295244618395266,
            "range": "± 1.32%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 1.0556389432485265,
            "range": "± 0.31%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1.5243553816047233,
            "range": "± 1.09%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5.833,
            "range": "± 0.00%",
            "unit": "ms",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1.718095890410953,
            "range": "± 4.07%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3.149021526418761,
            "range": "± 1.85%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2.3135753424657177,
            "range": "± 2.11%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 76543.3346379639,
            "range": "± 0.59%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 30347.121330724076,
            "range": "± 1.43%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 26071.023483365818,
            "range": "± 1.99%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 31698.892367905893,
            "range": "± 1.24%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 868515.4990215134,
            "range": "± 1.20%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 18551.164383561583,
            "range": "± 1.04%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 303.0564657534221,
            "range": "± 1.08%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 298.7783522504927,
            "range": "± 1.19%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 635818.1095890536,
            "range": "± 0.17%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 108.19377495107814,
            "range": "± 1.05%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 117.72875048923389,
            "range": "± 0.56%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 205301,
            "range": "± 225.59%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 140052.60273972654,
            "range": "± 1.09%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          }
        ]
      }
    ]
  }
}