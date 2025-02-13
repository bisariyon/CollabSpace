"use client";

import "tldraw/tldraw.css";
import { Tldraw, DefaultStylePanel } from "tldraw";
import { useStorageStore } from "./useStorageStore";
import { useSelf } from "@liveblocks/react/suspense";
import { Avatars } from "@/components/Avatars";

/**
 * IMPORTANT: LICENSE REQUIRED
 * To remove the watermark, you must first purchase a license
 * Learn more: https://tldraw.dev/community/license
 */

export function StorageTldraw() {
  // Getting authenticated user info. Doing this using selectors instead
  // of just `useSelf()` to prevent re-renders on Presence changes
  const id = useSelf((me) => me.id);
  const info = useSelf((me) => me.info);

  const store = useStorageStore({
    user: { id, color: info.color, name: info.name },
  });

  return (
    <div className="w-full  h-[65vh] md:h-[87vh] flex flex-col">
      <div className="w-full h-full">
        <Tldraw
          store={store}
          components={{
            // Render a live avatar stack at the top-right
            StylePanel: () => (
              <div
                style={{
                  display: "flex-column",
                  marginTop: 4,
                }}
              >
                <Avatars />
                <DefaultStylePanel />
              </div>
            ),
          }}
          autoFocus
        />
      </div>
    </div>
  );
}
