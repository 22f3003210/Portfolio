import json
import os

log_file = r"C:\Users\sayed\.gemini\antigravity\brain\c56a9c70-4a12-4063-8b7e-d5db152fb2af\.system_generated\logs\transcript.jsonl"

if os.path.exists(log_file):
    with open(log_file, "r", encoding="utf-8") as f:
        for line in f:
            try:
                data = json.loads(line)
                if "tool_calls" in data and data["tool_calls"]:
                    for tc in data["tool_calls"]:
                        if tc.get("name") == "generate_image" or "generate_image" in str(tc.get("name")):
                            print("----------------------------------------")
                            print("Step index:", data.get("step_index"))
                            print("Tool Call Name:", tc.get("name"))
                            print("Args:", json.dumps(tc.get("args") or tc.get("arguments"), indent=2))
            except Exception as e:
                pass
else:
    print("Log not found")
