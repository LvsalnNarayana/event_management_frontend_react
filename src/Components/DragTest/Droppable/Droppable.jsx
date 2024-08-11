/* eslint-disable import/prefer-default-export */
import React from "react";
import { useDroppable } from "@dnd-kit/core";

import styles from "./Droppable.module.css";
import { droppable } from "./dropppable-svg";

export const Droppable = ({ id, children, dragging }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const className = `
  ${styles.Droppable}
  ${isOver && styles.over}
  ${dragging ? styles.dragging : ""}
  ${children ? styles.dropped : ""}
`.trim();

  return (
    <div ref={setNodeRef} className={className} aria-label="Droppable region">
      {children}
      {droppable}
    </div>
  );
};
