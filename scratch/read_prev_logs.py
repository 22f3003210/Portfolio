import json
import os

log_file = r"C:\Users\sayed\.gemini\antigravity\brain\fca53fda-0554-4d5a-9e24-1eeb99827052\.system_generated\logs\transcript.jsonl"

if os.path.exists(log_file):
    print("Found log file:", log_file)
    with open(log_file, "r", encoding="utf-8") as f:
        for line in f:
            try:
                data = json.loads(line)
                if "tool_calls" in data:
                    for tc in data["tool_calls"]:
                        tc_str = str(tc).lower()
                        if "image" in tc_str or "generate" in tc_str:
                            print("----------------------------------------")
                            print("Tool Call:", tc.get("name"))
                            print("Args:", json.dumps(tc.get("Arguments"), indent=2))
            except Exception as e:
                pass
else:
    print("Log file not found:", log_file)
