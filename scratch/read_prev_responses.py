import json
import os

log_file = r"C:\Users\sayed\.gemini\antigravity\brain\c56a9c70-4a12-4063-8b7e-d5db152fb2af\.system_generated\logs\transcript_full.jsonl"
if not os.path.exists(log_file):
    log_file = r"C:\Users\sayed\.gemini\antigravity\brain\c56a9c70-4a12-4063-8b7e-d5db152fb2af\.system_generated\logs\transcript.jsonl"

if os.path.exists(log_file):
    print("Found log file:", log_file)
    steps = []
    with open(log_file, "r", encoding="utf-8") as f:
        for line in f:
            try:
                steps.append(json.loads(line))
            except:
                pass
    
    # Iterate and find the tool call and its response
    for i, step in enumerate(steps):
        if "tool_calls" in step:
            for tc in step["tool_calls"]:
                if tc.get("name") == "run_command" and "puppeteer" in str(tc):
                    print(f"--- STEP {step.get('step_index')} (Tool Call) ---")
                    print("Command:", tc.get("args", {}).get("CommandLine"))
                    # The next step or a subsequent step is usually the tool response.
                    # Let's search for the tool response step that matches the tool call.
                    for j in range(i+1, min(i+5, len(steps))):
                        next_step = steps[j]
                        if next_step.get("type") == "TOOL_RESPONSE" or "content" in next_step:
                            print(f"--- RESPONSE STEP {next_step.get('step_index')} ---")
                            content = next_step.get("content", "")
                            # Sometimes it is under 'output' or in content
                            print("Content:", content)
                            if "tool_responses" in next_step:
                                for tr in next_step["tool_responses"]:
                                    print("Tool Response:", tr.get("output"))
                            break
else:
    print("Log file not found.")
